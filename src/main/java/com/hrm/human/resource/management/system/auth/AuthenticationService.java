package com.hrm.human.resource.management.system.auth;

import com.hrm.human.resource.management.system.config.JwtService;
import com.hrm.human.resource.management.system.entity.Department;
import com.hrm.human.resource.management.system.entity.Position;
import com.hrm.human.resource.management.system.entity.ResponseMessage;
import com.hrm.human.resource.management.system.entity.User;
import com.hrm.human.resource.management.system.exception.EmailAlreadyExistException;
import com.hrm.human.resource.management.system.exception.EmailOrPasswordIncorrectException;
import com.hrm.human.resource.management.system.repository.DepartmentRepository;
import com.hrm.human.resource.management.system.repository.PositionRepository;
import com.hrm.human.resource.management.system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final DepartmentRepository departmentRepository;

    private final PositionRepository positionRepository;

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

//    public ResponseMessage register(RegisterRequest request) {
//        Optional<User> existingUserOptional = userRepository.findByWorkEmail(request.getWorkEmail());
//        Optional<Department> department = departmentRepository.findById(request.getDepartmentId());
//        Optional<Position> position = positionRepository.findById(request.getPositionId());
//        if (existingUserOptional.isPresent()) {
//            return ResponseMessage.builder()
//                    .message("Email Already Exists")
//                    .build();
//        }
//        if (!department.isPresent()) {
//            return ResponseMessage.builder()
//                    .message("Department not found")
//                    .build();
//        }
//        if (!position.isPresent()) {
//            return ResponseMessage.builder()
//                    .message("Position not found")
//                    .build();
//        }
//        else{
//            int age = calculateAge(request.getDob());
//            var user= User.builder()
//                    .firstName(request.getFirstName())
//                    .lastName(request.getLastName())
//                    .motherName(request.getMotherName())
//                    .spouseName(request.getSpouseName())
//                    .fatherName(request.getFatherName())
//                    .maritalStatus(request.getMaritalStatus())
//                    .nic(request.getNic())
//                    .mobilePhoneNo(request.getMobilePhoneNo())
//                    .homePhoneNo(request.getHomePhoneNo())
//                    .gender(request.getGender())
//                    .epfNo(request.getEpfNo())
//                    .address(request.getAddress())
//                    .dob(request.getDob())
//                    .workEmail(request.getWorkEmail())
//                    .password(passwordEncoder.encode(request.getPassword()))
//                    .age(age)
//                    .employmentType(request.getEmploymentType())
//                    .joinedDate(request.getJoinedDate())
//                    .role(request.getRole())
//                    .basicSalary(request.getBasicSalary())
//                    .department(department)
//                    .position(position)
//                    .build();
//            userRepository.save(user);
//            var jwtToken = jwtService.generateToken(user);
//            return ResponseMessage.builder()
//                    .message("User is registered Successfully")
//                    .build();
//
//        }
//
//    }

    public ResponseMessage register(RegisterRequest request) {
        try {
            userRepository.findByWorkEmail(request.getWorkEmail()).ifPresent(existingUser -> {
                throw new IllegalStateException("Email already exists");
            });

            Department department = departmentRepository.findById(request.getDepartmentId())
                    .orElseThrow(() -> new IllegalArgumentException("Department not found"));

            Position position = positionRepository.findById(request.getPositionId())
                    .orElseThrow(() -> new IllegalArgumentException("Position not found"));

            int age = calculateAge(request.getDob());

            User user = new User();
            user.setFatherName(request.getFirstName());
//        User user = User.builder()
            user.setFirstName(request.getFirstName());
            user.setLastName(request.getLastName());
            user.setMotherName(request.getMotherName());
            user.setSpouseName(request.getSpouseName());
            user.setFatherName(request.getFatherName());
            user.setMaritalStatus(request.getMaritalStatus());
            user.setNic(request.getNic());
            user.setMobilePhoneNo(request.getMobilePhoneNo());
            user.setHomePhoneNo(request.getHomePhoneNo());
            user.setGender(request.getGender());
            user.setEpfNo(request.getEpfNo());
            user.setAddress(request.getAddress());
            user.setDob(request.getDob());
            user.setWorkEmail(request.getWorkEmail());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setAge(age);
            user.setEmploymentType(request.getEmploymentType());
            user.setJoinedDate(request.getJoinedDate());
            user.setRole(request.getRole());
            user.setBasicSalary(request.getBasicSalary());
            user.setDepartment(department);
            user.setPosition(position);
//                .build();

            userRepository.save(user);

            return ResponseMessage.builder()
                    .message("User registered successfully")
                    .build();
        }catch (Exception e) {
            return ResponseMessage.builder()
                    .message("User registration failed: " + e.getMessage())
                    .build();
        }

    }

    public ResponseEntity authenticate(AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getWorkEmail(),
                            request.getPassword()
                    )
            );

            var user = userRepository.findByWorkEmail(request.getWorkEmail())
                    .orElseThrow();
            var jwtToken = jwtService.generateToken(user);

            AuthenticationResponse response = AuthenticationResponse.builder()
                    .token(jwtToken)
                    .message("User is valid")
                    .userId(user.getEmployeeId())
                    .build();

            return ResponseEntity.ok(response);
        } catch (AuthenticationException ex) {
            AuthenticationResponse response = AuthenticationResponse.builder()
                    .message("Email or Password is incorrect")
                    .build();

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    private int calculateAge(LocalDate dob) {
        return Period.between(dob, LocalDate.now()).getYears();
    }
}

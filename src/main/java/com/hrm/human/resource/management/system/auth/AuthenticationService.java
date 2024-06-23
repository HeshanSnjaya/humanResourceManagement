package com.hrm.human.resource.management.system.auth;

import com.hrm.human.resource.management.system.config.JwtService;
import com.hrm.human.resource.management.system.entity.ResponseMessage;
import com.hrm.human.resource.management.system.entity.User;
import com.hrm.human.resource.management.system.exception.EmailAlreadyExistException;
import com.hrm.human.resource.management.system.exception.EmailOrPasswordIncorrectException;
import com.hrm.human.resource.management.system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
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

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public ResponseMessage register(RegisterRequest request) {
        Optional<User> existingUserOptional = repository.findByWorkEmail(request.getWorkEmail());
        if (existingUserOptional.isPresent()) {
            return ResponseMessage.builder()
                    .message("Email Already Exists")
                    .build();
        }
        else{
            int age = calculateAge(request.getDob());
            var user= User.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .motherName(request.getMotherName())
                    .spouseName(request.getSpouseName())
                    .fatherName(request.getFatherName())
                    .maritalStatus(request.getMaritalStatus())
                    .nic(request.getNic())
                    .mobilePhoneNo(request.getMobilePhoneNo())
                    .homePhoneNo(request.getHomePhoneNo())
                    .gender(request.getGender())
                    .epfNo(request.getEpfNo())
                    .address(request.getAddress())
                    .dob(request.getDob())
                    .workEmail(request.getWorkEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .age(age)
                    .employmentType(request.getEmploymentType())
                    .joinedDate(request.getJoinedDate())
                    .role(request.getRole())
                    .basicSalary(request.getBasicSalary())
                    .build();
            repository.save(user);
            var jwtToken = jwtService.generateToken(user);
            return ResponseMessage.builder()
                    .message("User is registered Successfully")
                    .build();

        }

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getWorkEmail(),
                            request.getPassword()
                    )
            );

            var user = repository.findByWorkEmail(request.getWorkEmail())
                    .orElseThrow();
            var jwtToken = jwtService.generateToken(user);

            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .message("User is valid")
                    .userId(user.getEmployeeId())
                    .build();
        } catch (AuthenticationException ex) {
            return AuthenticationResponse.builder()
                    .message("Email or Password is incorrect")
                    .build();
        }
    }

    private int calculateAge(LocalDate dob) {
        return Period.between(dob, LocalDate.now()).getYears();
    }
}

package com.hrm.human.resource.management.system.auth;

import com.hrm.human.resource.management.system.config.JwtService;
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

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        Optional<User> existingUserOptional = repository.findByEmail(request.getWorkEmail());
        if (existingUserOptional.isPresent()) {
            /*User existingUser = existingUserOptional.get();*/
            throw new EmailAlreadyExistException("Email Already Exists");
        }
        else{
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
                    .age(request.getAge())
                    .employmentType(request.getEmploymentType())
                    .joinedDate(request.getJoinedDate())
                    .role(request.getRole())
                    .build();
            repository.save(user);
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();

        }

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            var user = repository.findByEmail(request.getEmail())
                    .orElseThrow();

            var jwtToken = jwtService.generateToken(user);

            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        } catch (AuthenticationException ex) {
            throw new EmailOrPasswordIncorrectException("Email or Password is incorrect");
        }
    }
}

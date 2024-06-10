package com.hrm.human.resource.management.system.service;

import com.hrm.human.resource.management.system.dto.UserDTO;
import com.hrm.human.resource.management.system.entity.User;
import com.hrm.human.resource.management.system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public Optional<User> getUserById(Long employeeId) {
        return userRepository.findById(employeeId);
    }

    public Optional<UserDTO> getUserDetailsByIdAndRole(Long employeeId, String role) {
        Optional<User> userOptional = getUserById(employeeId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getRole().name().equalsIgnoreCase(role)) {
                return Optional.of(UserDTO.builder()
                        .firstName(user.getFirstName())
                        .lastName(user.getLastName())
                        .gender(user.getGender())
                        .workEmail(user.getWorkEmail())
                        .mobilePhoneNo(user.getMobilePhoneNo())
                        .workEmail(user.getWorkEmail())
                        .employmentType(user.getEmploymentType())
                        .joinedDate(user.getJoinedDate())
                        .epfNo(user.getEpfNo())
                        .dob(user.getDob())
                        .maritalStatus(user.getMaritalStatus())
                        .address(user.getAddress())
                        .spouseName(user.getSpouseName())
                        .fatherName(user.getFatherName())
                        .motherName(user.getMotherName())
                        .build());
            }
        }
        return Optional.empty();
    }
}

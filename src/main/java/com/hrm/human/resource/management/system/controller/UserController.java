package com.hrm.human.resource.management.system.controller;


import com.hrm.human.resource.management.system.dto.UserDTO;
import com.hrm.human.resource.management.system.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{employeeId}")
    public ResponseEntity<UserDTO> getUserDetailsById(@PathVariable Long employeeId) {
        Optional<UserDTO> userDetailsOptional = userService.getUserDetailsByIdAndRole(employeeId, "EMPLOYEE");
        if (userDetailsOptional.isPresent()) {
            return ResponseEntity.ok(userDetailsOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

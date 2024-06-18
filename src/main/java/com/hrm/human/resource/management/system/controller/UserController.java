package com.hrm.human.resource.management.system.controller;


import com.hrm.human.resource.management.system.dto.UserDTO;
import com.hrm.human.resource.management.system.dto.UserUpdateRequestDTO;
import com.hrm.human.resource.management.system.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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

    @GetMapping("/employees")
    public ResponseEntity<List<UserDTO>> getAllEmployees() {
        List<UserDTO> employees = userService.getAllEmployees();
        if (!employees.isEmpty()) {
            return ResponseEntity.ok(employees);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PutMapping("/{employeeId}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long employeeId, @RequestBody UserUpdateRequestDTO request) {
        Optional<UserDTO> updatedUserOptional = userService.updateUser(employeeId, request);
        if (updatedUserOptional.isPresent()) {
            return ResponseEntity.ok(updatedUserOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{employeeId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long employeeId) {
        userService.deleteUserById(employeeId);
        return ResponseEntity.noContent().build();
    }
}

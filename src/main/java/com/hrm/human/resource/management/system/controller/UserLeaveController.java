package com.hrm.human.resource.management.system.controller;

import com.hrm.human.resource.management.system.dto.AddUserLeaveTypeDTO;
import com.hrm.human.resource.management.system.entity.ResponseMessage;
import com.hrm.human.resource.management.system.service.UserLeaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user-leave")
@RequiredArgsConstructor
public class UserLeaveController {

    private final UserLeaveService userLeaveService;

    @PostMapping("/assign")
    public ResponseEntity<ResponseMessage> assignLeaveType(@RequestBody AddUserLeaveTypeDTO addUserLeaveTypeDTO) {
        ResponseMessage responseMessage = userLeaveService.addUserLeave(addUserLeaveTypeDTO);
        return ResponseEntity.ok(responseMessage);
    }
}

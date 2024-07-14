package com.hrm.human.resource.management.system.controller;

import com.hrm.human.resource.management.system.dto.LeaveApplicationDTO;
import com.hrm.human.resource.management.system.entity.LeaveApplicationForm;
import com.hrm.human.resource.management.system.entity.ResponseMessage;
import com.hrm.human.resource.management.system.service.LeaveApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leave-Application")
@RequiredArgsConstructor
public class LeaveApplicationController {

    private final LeaveApplicationService leaveApplicationService;

    @PostMapping("/apply")
    public ResponseEntity<ResponseMessage> applyForLeave(@RequestBody LeaveApplicationDTO leaveApplicationDTO) {
        ResponseMessage responseMessage = leaveApplicationService.applyForLeave(leaveApplicationDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseMessage);
    }

    @GetMapping("/employee/{employeeId}/confirmed")
    public ResponseEntity<List<LeaveApplicationForm>> getConfirmedLeaveApplications(@PathVariable Long employeeId) {
        List<LeaveApplicationForm> leaveApplicationForms = leaveApplicationService.getLeaveApplicationFormsByEmployeeId(employeeId);
        return ResponseEntity.ok(leaveApplicationForms);
    }

    @PutMapping("/approve/{leaveApplicationFormId}")
    public ResponseEntity<ResponseMessage> approveLeaveApplication(
            @PathVariable Long leaveApplicationFormId,
            @RequestParam String newStatus) {
        ResponseMessage responseMessage = leaveApplicationService.updateApprovalStatus(leaveApplicationFormId, newStatus);
        return ResponseEntity.ok(responseMessage);
    }
}

package com.hrm.human.resource.management.system.service;

import com.hrm.human.resource.management.system.dto.LeaveApplicationDTO;
import com.hrm.human.resource.management.system.entity.*;
import com.hrm.human.resource.management.system.repository.LeaveApplicationRepository;
import com.hrm.human.resource.management.system.repository.LeaveRepository;
import com.hrm.human.resource.management.system.repository.UserLeaveRepository;
import com.hrm.human.resource.management.system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeaveApplicationService {

    private final LeaveApplicationRepository leaveApplicationRepository;
    private final UserLeaveRepository userLeaveRepository;
    private final LeaveRepository leaveRepository;
    private final UserRepository userRepository;

    @Transactional
    public ResponseMessage applyForLeave(LeaveApplicationDTO leaveApplicationDTO) {
        User employee = userRepository.findById(leaveApplicationDTO.getEmployeeId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Leave leave = leaveRepository.findByLeaveTypeName(leaveApplicationDTO.getLeaveTypeName())
                .orElseThrow(() -> new RuntimeException("Leave type not found"));

        if (leaveApplicationDTO.getNoOfDays() > leave.getNoOfLeaves()) {
            return ResponseMessage.builder()
                    .message("Exceeded number of allowed leaves")
                    .build();
        }

        LeaveApplicationForm leaveApplication = new LeaveApplicationForm();
        leaveApplication.setEmployee(employee);
        leaveApplication.setLeave(leave);
        leaveApplication.setNoOfDays(leaveApplicationDTO.getNoOfDays());
        leaveApplication.setStartDate(leaveApplicationDTO.getStartDate());
        leaveApplication.setEndDate(leaveApplicationDTO.getEndDate());
        leaveApplication.setReason(leaveApplicationDTO.getReason());
        leaveApplication.setApprovedStatus("Pending");

        leaveApplicationRepository.save(leaveApplication);

        updateUserLeave(employee.getEmployeeId(), leave.getLeaveId(), leaveApplicationDTO.getNoOfDays());

        return ResponseMessage.builder()
                .message("Leave application submitted successfully")
                .build();
    }

    private void updateUserLeave(Long employeeId, Long leaveTypeId, Integer requestedDays) {
        UserLeave userLeave = userLeaveRepository.findUserLeaveByEmployee_EmployeeIdAndLeave_LeaveId(employeeId, leaveTypeId)
                .orElseThrow(() -> new RuntimeException("User leave not found"));

        Integer remainingLeaves = userLeave.getNoOfLeaves() - requestedDays;
        if (remainingLeaves >= 0) {
            userLeave.setNoOfLeaves(remainingLeaves);
            userLeaveRepository.save(userLeave);
        } else {
            throw new RuntimeException("Requested days exceed available leaves");
        }
    }

    @Transactional
    public List<LeaveApplicationForm> getLeaveApplicationFormsByEmployeeId(Long employeeId) {
        return leaveApplicationRepository.findByEmployee_EmployeeIdAndApprovedStatus(employeeId, "Confirmed");
    }

    @Transactional
    public ResponseMessage updateApprovalStatus(Long leaveApplicationFormId, String newStatus) {
        LeaveApplicationForm leaveApplicationForm = leaveApplicationRepository.findById(leaveApplicationFormId)
                .orElseThrow(() -> new RuntimeException("Leave application form not found"));

        leaveApplicationForm.setApprovedStatus(newStatus);
        leaveApplicationRepository.save(leaveApplicationForm);

        return ResponseMessage.builder()
                .message("Approval status updated successfully")
                .build();
    }
}
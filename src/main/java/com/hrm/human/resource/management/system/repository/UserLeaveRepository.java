package com.hrm.human.resource.management.system.repository;

import com.hrm.human.resource.management.system.entity.UserLeave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserLeaveRepository extends JpaRepository<UserLeave, Long> {
    Optional<UserLeave> findUserLeaveByEmployee_EmployeeIdAndLeave_LeaveId(Long employeeId, Long leaveTypeId);
}

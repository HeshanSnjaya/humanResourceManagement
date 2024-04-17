package com.hrm.human.resource.management.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "leaveApplicationForm")
public class LeaveApplicationForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leaveApplicationFormId;
    private Integer noOfDays;
    private String reason;
    private String approvedStatus;
    private Date startDate;
    private Date endDate;
    private String laveTypeName;
    private String immediateSupervisorApproval;
}

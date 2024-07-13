package com.hrm.human.resource.management.system.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

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
    private String approvedStatus = "Pending";
    private Date startDate;
    private Date endDate;

    @PrePersist
    protected void onCreate() {
        this.approvedStatus = "Pending";
    }

    @ManyToOne
    @JoinColumn(name = "employeeId")
    private User employee;

    @ManyToOne
    @JoinColumn(name = "leaveId")
    private Leave leave;
}

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
@Table(name = "paySlip")
public class PaySlip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paySlipId;
    private Float grossAmount;
    private Float netAmount;
    private Float basicAmount;
    private Float totalBonus;
    private Float employeeEpfAmount;
    private Float employerEpfAmount;
    private Float employerEtfAmount;
    private Date payDate;
    private Date issuedDate;
    private String month;

    @ManyToOne
    @JoinColumn(name = "employeeId")
    private User employee;


}

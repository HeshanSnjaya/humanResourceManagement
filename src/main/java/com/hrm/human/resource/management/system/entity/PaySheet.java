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
@Table(name = "paySheet")
public class PaySheet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paySheetId;
    private Float grossAmount;
    private Float netAmount;
    private Float basicAmount;
    private Float employeeEpfAmount;
    private Float employerEpfAmount;
    private Float employerEtfAmount;
    private Date payDate;
    private Date issuedDate;
}

package com.hrm.human.resource.management.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "educationalQualification")
public class EducationalQualification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qualificationId;
    private String qualificationDesc;
    private String institute;
}

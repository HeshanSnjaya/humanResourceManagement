package com.hrm.human.resource.management.system.controller;

import com.hrm.human.resource.management.system.dto.PieChartDTO;
import com.hrm.human.resource.management.system.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/employee-count")
    public PieChartDTO getEmployeeCountByDepartment() {
        return dashboardService.getEmployeeCountByDepartment();
    }
}

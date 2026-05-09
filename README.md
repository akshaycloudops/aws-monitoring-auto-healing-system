# Production Monitoring and Auto-Healing Infrastructure on AWS

## Overview
This project demonstrates a production-grade AWS infrastructure designed for high availability, monitoring, auto scaling, and incident recovery simulation. It replicates a real-world production environment with observability, alerting, and automated recovery behavior.

The system includes a React-based monitoring dashboard deployed on AWS EC2 behind an Application Load Balancer, integrated with Auto Scaling, CloudWatch monitoring, and SNS alerts.

---

## Architecture

Users
→ Application Load Balancer
→ Auto Scaling Group
→ EC2 Instances (2+)
→ CloudWatch Monitoring
→ SNS Email Alerts

---

## Key Features

- Highly available architecture using multi-instance setup
- Load balancing using AWS Application Load Balancer
- Auto Scaling Group with dynamic instance management
- Real-time CPU and system monitoring via CloudWatch
- Automated email alerts using SNS
- Health checks and self-healing infrastructure
- Simulated production incident handling (CPU spike, instance failure)
- Operational dashboard for infrastructure visibility

---

## AWS Services Used

- Amazon EC2
- Application Load Balancer (ALB)
- Auto Scaling Group (ASG)
- Amazon CloudWatch
- Amazon SNS
- IAM Roles and Policies
- Security Groups
- Target Groups

---

## Frontend Dashboard

A React-based monitoring UI displaying:

- Running instances status
- CPU utilization graph
- Alert summary
- System health indicators
- Database/service health simulation

Tech Stack:
- React (Vite)
- Recharts
- Lucide Icons
- Vanilla CSS styling

---

## Monitoring & Observability

CloudWatch is configured to track:

- CPUUtilization per instance
- Network In/Out metrics
- HealthyHostCount from ALB
- RequestCount metrics
- Alarm state transitions

Dashboards provide real-time infrastructure visibility.

---

## Alerting System

SNS is configured to send email notifications for:

- CPU utilization > 70%
- Instance health degradation
- Auto Scaling events
- System anomalies

---

## Auto Scaling Behavior

- Minimum Instances: 2
- Maximum Instances: 4
- Desired Capacity: 2
- Scaling Policy: Target CPU Utilization (60%)

Automatically scales up or down based on load.

---

## Incident Simulation

The following failure scenarios were tested:

- High CPU load using stress testing
- Manual EC2 termination
- Health check failure simulation

System behavior:

- CloudWatch detects anomaly
- SNS triggers email alert
- Auto Scaling replaces unhealthy instances
- Load Balancer redistributes traffic

---

## Deployment Steps

1. Build React app
2. Create EC2 instance
3. Install Nginx
4. Deploy static build to /var/www/html
5. Create AMI for template
6. Configure Target Group
7. Set up Application Load Balancer
8. Create Auto Scaling Group
9. Configure CloudWatch alarms
10. Set up SNS notifications

---

## Outcome

- Fully functional production-like AWS environment
- Demonstrates cloud architecture and DevOps principles
- Real-time monitoring and alerting system
- Auto-healing infrastructure behavior
- Professional-grade portfolio project for AWS roles

---

## Author

AWS Solutions Architect Portfolio Project
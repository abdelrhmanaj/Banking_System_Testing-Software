# 🧪 Banking System Testing – Software Testing & Verification

## 📌 Project Overview
This project focuses on designing and executing a comprehensive testing strategy for a simplified banking system that simulates real-world banking operations such as account management, deposits, withdrawals, transfers, and administrative state transitions.

The goal of this project is to apply theoretical software testing concepts in a practical environment using multiple testing methodologies to validate system correctness, detect defects, and ensure compliance with functional and non-functional requirements.

This project follows a complete testing lifecycle including requirements analysis, test case design, execution, verification, and validation.

---

## 🎯 Testing Objectives
- Validate banking system functionality
- Verify internal logic execution paths
- Test UI behavior and user interaction
- Ensure correct state-based system behavior
- Demonstrate Test-Driven Development (TDD)

---

## 🧱 System Architecture
The banking system is structured into logical layers to improve maintainability and separation of concerns:

- **UI Layer** → Login, Dashboard, Transaction Pages  
- **Controller Layer** → Handles requests and workflow  
- **Service Layer** → Business logic (Deposit, Withdraw, Transfer)  
- **Model Layer** → Account entity and state handling  

The layered architecture improves modularity and system maintainability. :contentReference[oaicite:0]{index=0}

---

## 💳 Core Banking Functionalities
- Client profile management  
- Deposit operations  
- Withdrawal operations  
- Money transfer operations  
- Account state enforcement  
- Administrative state transitions  

---

## 🔄 Account State Model
The system uses state-based control to manage account behavior:

- Unverified  
- Verified  
- Suspended  
- Closed  

Each state restricts or allows specific operations to enforce business rules and prevent invalid transactions. :contentReference[oaicite:1]{index=1}

---

## 🧪 Testing Techniques Implemented

### 🟢 Black-Box Testing
- Equivalence Partitioning  
- Boundary Value Analysis  

Example Scenarios:
- Negative deposit validation  
- Balance boundary withdrawal checks  
- Closed account transaction validation  

---

### 🔵 White-Box Testing
- Control Flow Graph (CFG) Analysis  
- Statement Coverage  
- Branch Coverage  

Achieved:
- 100% Statement Coverage  
- 100% Branch Coverage :contentReference[oaicite:2]{index=2}

---

### 🟡 UI Testing
Validated:
- Input validation  
- Button state behavior  
- Error & success message handling  
- Dashboard data rendering  

---

### 🟣 State-Based Testing
Verified system behavior across different account states to ensure:
- Invalid operations are blocked  
- Valid state transitions are allowed  

---

### 🔴 Test-Driven Development (TDD)
Implemented new feature using TDD:

**Feature:** Client Credit Score Check  

TDD Steps:
1. Write failing test  
2. Implement minimal code  
3. Implement full logic  
4. Refactor  

---

## 🧪 Test Levels Covered
- Unit Testing  
- Integration Testing  
- System Testing  

Testing ensures reliability, correctness, and consistent system behavior.

---

## 💻 Technologies Used
- Java  
- Software Testing Methodologies  
- Control Flow Graph Analysis  
- Manual UI Testing  
- Test Case Design Techniques  

---

## 📚 Learning Outcomes
- Software Testing Lifecycle  
- Black-box & White-box Testing  
- State-Based Testing  
- UI Testing  
- Test-Driven Development  
- Test Coverage Analysis  

---

## 👨‍💻 Contributors
- Abdelrhman Mohammed Mahmoud  
- Team Members  

---

## 📄 Documentation
Full testing report and design documentation included in repository.

---

## ⭐ Support
If you find this project useful, consider giving it a ⭐ on GitHub!

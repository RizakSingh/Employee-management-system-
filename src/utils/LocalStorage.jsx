 export const Employees = [
  {
    "id": "emp001",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare sales report",
        "description": "Compile Q3 sales data into presentation format",
        "date": "2025-10-05",
        "category": "Sales",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client follow-up",
        "description": "Call client regarding pending invoice",
        "date": "2025-10-06",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Add new leads to CRM database",
        "date": "2025-10-07",
        "category": "Admin",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": "emp002",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design social media post",
        "description": "Create graphics for product launch campaign",
        "date": "2025-10-05",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team meeting notes",
        "description": "Summarize weekly sync meeting notes",
        "date": "2025-10-04",
        "category": "Operations",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Email campaign draft",
        "description": "Write first draft for upcoming email newsletter",
        "date": "2025-10-07",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Competitor research",
        "description": "Collect insights on top 5 competitors",
        "date": "2025-10-09",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "emp003",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory check",
        "description": "Verify stock levels in warehouse A",
        "date": "2025-10-03",
        "category": "Logistics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Supplier call",
        "description": "Confirm raw material shipment",
        "date": "2025-10-04",
        "category": "Procurement",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare budget proposal",
        "description": "Draft budget for next quarter",
        "date": "2025-10-10",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "emp004",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Website bug fix",
        "description": "Resolve login page error",
        "date": "2025-10-02",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Database cleanup",
        "description": "Remove duplicate entries from user table",
        "date": "2025-10-06",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "API documentation",
        "description": "Update internal API docs",
        "date": "2025-10-08",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code review",
        "description": "Review PR #453 on GitHub",
        "date": "2025-10-09",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "emp005",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Training session",
        "description": "Conduct Excel training for interns",
        "date": "2025-10-05",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Interview scheduling",
        "description": "Set up interviews for marketing role",
        "date": "2025-10-06",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Onboarding documents",
        "description": "Prepare joining kits for new hires",
        "date": "2025-10-07",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Leave approval",
        "description": "Approve leave requests for October",
        "date": "2025-10-08",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [
  {
    "id": "admin001",
    "email": "admin@example.com",
    "password": "123"
  }
];
export const setLocalStorage = ()=>{
  localStorage.setItem("employees", JSON.stringify(Employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
return{employees,admin}
};
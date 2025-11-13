<template>
  <div class="page-wrapper">
    <div class="about-page p-6 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">
        Travel & Expense Reimbursement App - Frontend
      </h1>

      <!-- Overview -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">Overview</h2>
        <p>
          This is the frontend of a Travel & Expense Reimbursement App.
          Employees can register business trips and home–work bike commutes,
          view their submitted trips, and see reimbursement statuses. Managers
          can review, approve, or reject reimbursements.
        </p>
        <p class="mt-2">
          Built with <strong>Vue 3</strong> and a <strong>mobile-first design</strong>.
        </p>
      </section>

      <!-- Features -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">Features (User Stories)</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>US-01: Login with company account or unique nickname. MOCK ☑️</li>
          <li>US-02: Register a new trip/commute : MOCK ☑️</li>
          <li>US-03: View all submitted trips with reimbursement status : MOCK ☑️</li>
          <li>US-04: (Manager) View all trips, filter by employee, transport, or month. MOCK ☑️</li>
          <li>US-05: (Manager) Approve or reject reimbursement requests. MOCK ☑️</li>
          <li>US-06: View a summary of reimbursements (total per month or transport type). MOCK ☑️</li>
          <li>US-99: Export monthly overview as PDF or CSV (extra feature).</li>
        </ul>
      </section>

      <!-- DevOps -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">Development & DevOps Practices</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Always create a new branch when working on a single feature.</li>
          <li>Make pull requests.</li>
          <li>
            Branch name template:
            <code style="color: darkviolet;">feature/us-02-add-trip-mock</code> (‘mock’ indicates using mock data).
          </li>
        </ul>
      </section>

      <!-- Folder structure -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">Folder & Component Structure</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><code>src/views/</code>: Page-level components</li>
          <li><code>src/components/</code>: Reusable components</li>
          <li><code>src/assets/</code>: Global CSS, fonts, and images</li>
          <li><code>src/router/index.js</code>: Route definitions for SPA navigation</li>
        </ul>
      </section>

      <h2 class="text-2xl font-semibold mb-2">Solid principles we use</h2>
      <section class="mb-6">
        <ul class="list-disc list-inside space-y-1">
          <li>Sinlge Responsibility principle (SRP) Example</li>
          <li>Open-Closed Principle (OCP) Example</li>
        </ul>
      </section>

      <h2 class="text-2xl font-semibold mb-2">Programming patterns we use</h2>
       <section class="mb-6">
        <ul class="list-disc list-inside space-y-1">
          <li>Facade pattern</li>
          <li>Decorator pattern</li>
        </ul>
      </section>

      <!-- GitHub -->
      <div class="mt-6">
        <github-button
          href="https://github.com/FatihKilicPXL/TravelAppFrontend"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          aria-label="View FatihKilicPXL/TravelAppFrontend on GitHub"
        >
          View On Github
        </github-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-csharp'
import GithubButton from 'vue-github-button'

// Code snippets
const codeBefore = `
public class UserController : ControllerBase
{
    public IActionResult CreateUser(string name, string email)
    {
        // Validation (one responsibility)
        if (string.IsNullOrEmpty(email)) return BadRequest("Invalid email");

        // Persistence (another responsibility)
        using var context = new AppDbContext();
        context.Users.Add(new User { Name = name, Email = email });
        context.SaveChanges();

        return Ok("User created");
    }
}`

const codeAfter = `
public interface IUserValidator { bool IsValid(string email); }
public class EmailValidator : IUserValidator
{
    public bool IsValid(string email) => !string.IsNullOrEmpty(email) && email.Contains("@");
}

public interface IUserRepository { void AddUser(User user); }
public class DbUserRepository : IUserRepository
{
    public void AddUser(User user)
    {
        using var context = new AppDbContext();
        context.Users.Add(user);
        context.SaveChanges();
    }
}

public class UserController : ControllerBase
{
    private readonly IUserValidator _validator;
    private readonly IUserRepository _repo;

    public UserController(IUserValidator validator, IUserRepository repo)
    {
        _validator = validator;
        _repo = repo;
    }

    public IActionResult CreateUser(string name, string email)
    {
        if (!_validator.IsValid(email)) return BadRequest("Invalid email");
        _repo.AddUser(new User { Name = name, Email = email });
        return Ok("User created");
    }
}`

const codeArea = `
public class AreaCalculator
{
    public double CalculateArea(object shape)
    {
        if (shape is Rectangle rect) return rect.Width * rect.Height;
        // Adding Circle? Edit this class—risky!
        else if (shape is Circle circ) return Math.PI * circ.Radius * circ.Radius;
        return 0;
    }
}

public interface IShape { double CalculateArea(); }

public class Rectangle : IShape
{
    public double Width { get; set; }
    public double Height { get; set; }
    public double CalculateArea() => Width * Height;
}

public class Circle : IShape
{
    public double Radius { get; set; }
    public double CalculateArea() => Math.PI * Radius * Radius;
}

public class AreaCalculator
{
    public double CalculateArea(IShape shape) => shape.CalculateArea();
    // New shape? Just implement IShape—no edits here.
}`

onMounted(() => {
  Prism.highlightAll()
})
</script>

<style scoped>
.page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
}

.about-page {
  font-family: "Inter", sans-serif;
  line-height: 1.6;
  width: 100%;
  max-width: 800px;
}

/* Obsidian-like code block styling */
pre {
  background-color: #1e1e1e;
  color: #eee;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
}
</style>

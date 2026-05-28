SINGLETON SCENARIO 2 — The Logging Chaos Incident (Rebuilt)

Your backend system has grown over the last two years.
Originally, there was a simple logger that printed messages to the console.

But as more developers joined, everyone started creating their own logging utilities:

• One module writes logs to console
• Another writes logs to a file
• Another writes logs to a remote server
• Another writes logs only in debug mode
• Another creates a new logger instance every time a request comes in

Now the system behaves unpredictably:

• Some logs appear twice
• Some logs never appear
• Some logs appear in the wrong order
• Some logs are missing timestamps
• Some logs are written to the wrong file
• Some logs are written with different formats

Last week, during a production outage, the team couldn’t trace the issue because logs were scattered across multiple files and formats.

The engineering manager said:
“We need ONE unified logger. One place where all logs go. One consistent format. No more multiple logger instances.”

Your task is to design a solution.

Guiding Questions

    What is the real hidden problem in this scenario

    Why does this situation require a single, shared instance

    How would you ensure that every module uses the same logger

    What would your improved solution look like

    Provide the code for your improved solution



    Final polished version of your answer (short, clean, senior‑level)

    The hidden problem
    Multiple developers created separate logging utilities, causing inconsistent formats, duplicated logic, and scattered logs. There is no unified logging mechanism.

    Why a single shared instance is needed
    A shared logger ensures consistent formatting, centralized control, easier debugging, and prevents developers from creating new loggers for the same purpose.

    Ensuring all modules use the same logger
    In Node.js, requiring the same module in multiple files returns the same cached instance. We can prove this by importing the logger in two modules and comparing them in a third module using strict equality.

    Improved solution
    Create one loggerManager module that contains all logging logic. Export it once. Import it everywhere. Node.js ensures only one instance exists.

    Code
    Your loggerManager.js + moduleA.js + moduleB.js + app.js strict equality check is correct and demonstrates shared instance behavior.
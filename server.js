const express = require("express");

const app = express();
const PORT = 3000;

// ======================================================
// HOME — AWS ECS FARGATE DASHBOARD
// ======================================================

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AWS ECS Fargate Lab</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            min-height: 100vh;
        }

        .container {
            width: 94%;
            max-width: 1250px;
            min-height: 100vh;
            margin: auto;
            padding: 18px 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        /* HEADER */

        .hero {
            text-align: center;
            padding: 5px;
        }

        .hero h1 {
            font-size: 30px;
            margin-bottom: 5px;
        }

        .hero h1 span {
            color: #38bdf8;
        }

        .hero p {
            color: #94a3b8;
            font-size: 14px;
        }

        .status {
            display: inline-block;
            margin-top: 8px;
            padding: 6px 16px;
            border-radius: 20px;
            background: #14532d;
            color: #86efac;
            font-size: 13px;
            font-weight: bold;
        }

        /* AWS CARDS */

        .cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .card {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 10px;
            padding: 15px 10px;
            text-align: center;
        }

        .card .icon {
            font-size: 25px;
            margin-bottom: 5px;
        }

        .card h3 {
            font-size: 15px;
            margin-bottom: 5px;
        }

        .card p {
            color: #94a3b8;
            font-size: 11px;
        }

        /* SECTIONS */

        .section {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 10px;
            padding: 15px;
        }

        .section h2 {
            font-size: 16px;
            margin-bottom: 10px;
            color: #38bdf8;
        }

        /* PIPELINE */

        .pipeline {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .step {
            background: #0f172a;
            border: 1px solid #475569;
            padding: 9px 12px;
            border-radius: 7px;
            font-size: 12px;
            font-weight: bold;
            white-space: nowrap;
        }

        .arrow {
            color: #38bdf8;
            font-size: 18px;
        }

        /* AUTO SCALING */

        .scaling {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .metric {
            background: #0f172a;
            padding: 10px;
            border-radius: 7px;
            text-align: center;
            font-size: 11px;
            color: #94a3b8;
        }

        .metric strong {
            display: block;
            font-size: 22px;
            color: #38bdf8;
            margin: 3px 0;
        }

        /* BOTTOM */

        .bottom {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .deployment p {
            font-size: 12px;
            margin: 5px 0;
        }

        /* BUTTON */

        .cpu-button {
            display: inline-block;
            margin-top: 10px;
            padding: 9px 18px;
            border-radius: 7px;
            background: #0284c7;
            color: white;
            text-decoration: none;
            font-size: 12px;
            font-weight: bold;
        }

        .cpu-button:hover {
            background: #0369a1;
        }

        /* FOOTER */

        .footer {
            text-align: center;
            color: #64748b;
            font-size: 10px;
            margin-top: auto;
            padding-bottom: 5px;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
            .cards {
                grid-template-columns: repeat(2, 1fr);
            }

            .bottom {
                grid-template-columns: 1fr;
            }

            body {
                overflow: auto;
            }

            .container {
                min-height: auto;
            }
        }

        @media (max-width: 600px) {
            .cards {
                grid-template-columns: 1fr;
            }

            .scaling {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>

</head>

<body>

<div class="container">

    <!-- HEADER -->

    <div class="hero">

        <h1>
            ☁️ AWS <span>ECS Fargate</span> Lab
        </h1>

        <p>
            Containerized Node.js Application running on AWS
        </p>

        <div class="status">
            🟢 APPLICATION HEALTHY
        </div>

    </div>


    <!-- AWS SERVICES -->

    <div class="cards">

        <div class="card">

            <div class="icon">🐳</div>

            <h3>Docker</h3>

            <p>
                Application containerized using Docker.
            </p>

        </div>


        <div class="card">

            <div class="icon">📦</div>

            <h3>Amazon ECR</h3>

            <p>
                Docker images stored securely in ECR.
            </p>

        </div>


        <div class="card">

            <div class="icon">☁️</div>

            <h3>ECS Fargate</h3>

            <p>
                Serverless container execution.
            </p>

        </div>


        <div class="card">

            <div class="icon">⚖️</div>

            <h3>Application Load Balancer</h3>

            <p>
                Traffic distributed across ECS tasks.
            </p>

        </div>

    </div>


    <!-- DEPLOYMENT PIPELINE -->

    <div class="section">

        <h2>
            🚀 Deployment Pipeline
        </h2>

        <div class="pipeline">

            <div class="step">💻 Code</div>

            <div class="arrow">→</div>

            <div class="step">🐳 Docker</div>

            <div class="arrow">→</div>

            <div class="step">📦 ECR</div>

            <div class="arrow">→</div>

            <div class="step">📋 Task Definition</div>

            <div class="arrow">→</div>

            <div class="step">☁️ ECS</div>

            <div class="arrow">→</div>

            <div class="step">⚖️ ALB</div>

        </div>

    </div>


    <!-- AUTO SCALING -->

    <div class="section">

        <h2>
            📈 Auto Scaling Configuration
        </h2>

        <div class="scaling">

            <div class="metric">
                Minimum
                <strong>2</strong>
                Tasks
            </div>

            <div class="metric">
                Desired
                <strong>2</strong>
                Tasks
            </div>

            <div class="metric">
                Maximum
                <strong>4</strong>
                Tasks
            </div>

            <div class="metric">
                CPU Target
                <strong>60%</strong>
                Target Tracking
            </div>

        </div>

    </div>


    <!-- DEPLOYMENT + CPU TEST -->

    <div class="bottom">

        <div class="section deployment">

            <h2>
                🔄 Current Deployment
            </h2>

            <p>
                <strong>Task Definition:</strong>
                ecs-node-task
            </p>

            <p>
                <strong>Revision:</strong>
                4
            </p>

            <p>
                <strong>Platform:</strong>
                AWS ECS Fargate
            </p>

            <p>
                <strong>Container Port:</strong>
                3000
            </p>

        </div>


        <div class="section">

            <h2>
                🧪 Scaling Test
            </h2>

            <p style="font-size:12px; color:#94a3b8;">
                Generate controlled CPU workload
                to demonstrate ECS Service Auto Scaling.
            </p>

            <a
                class="cpu-button"
                href="/cpu-test"
            >
                🚀 Run CPU Test
            </a>

        </div>

    </div>


    <!-- FOOTER -->

    <div class="footer">

        AWS ECS Fargate
        • Docker
        • ECR
        • ALB
        • CloudWatch
        • Auto Scaling

        <br><br>

        Built as a hands-on AWS Cloud / DevOps project 🚀

    </div>

</div>

</body>

</html>
    `);
});


// ======================================================
// HEALTH CHECK
// ======================================================

app.get("/health", (req, res) => {
    res.send("Healthy");
});


// ======================================================
// CPU TEST
// ======================================================

app.get("/cpu-test", (req, res) => {

    const start = Date.now();

    // Controlled CPU workload for approximately 2 seconds
    while (Date.now() - start < 2000) {
        Math.sqrt(Math.random() * 1000000);
    }

    res.send(`
        <!DOCTYPE html>

        <html>

        <head>
            <title>CPU Test</title>
        </head>

        <body
            style="
                font-family: Arial;
                text-align: center;
                padding: 80px;
                background: #0f172a;
                color: white;
            "
        >

            <h1>
                🚀 CPU Test Completed
            </h1>

            <p>
                Controlled CPU workload was generated.
            </p>

            <p>
                Check CloudWatch
                <strong>CPUUtilization</strong>
                to observe the change.
            </p>

            <br>

            <a
                href="/"
                style="
                    color: #38bdf8;
                    text-decoration: none;
                "
            >
                ← Back to Dashboard
            </a>

        </body>

        </html>
    `);
});


// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
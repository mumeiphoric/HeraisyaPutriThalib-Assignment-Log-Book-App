import { NextResponse } from "next/server";

let assignmentList = [
  {
    id: 1,
    title: "Math homework",
    subject: "Math",
    dueDate: "2026-03-10"
  },
  {
    id: 2,
    title: "Physics report",
    subject: "Physics",
    dueDate: "2026-03-12"
  }
];

/**
 * @swagger
 * /api/assignments:
 *   get:
 *     summary: Get the list of all assignments!!
 *     description: Returns all assignments currently saved in the assignment log book (so you can see what work is coming up ^^)
 *     responses:
 *       200:
 *         description: Successfully retrieved the assignment list :0
 */

export async function GET() {
  return NextResponse.json({
    message: "Assignments retrieved successfully",
    data: assignmentList
  });
}

/**
 * @swagger
 * /api/assignments:
 *   post:
 *     summary: Add a new assignment :>
 *     description: Creates a new assignment entry in the log book so it can be tracked later :)
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Assignment created successfully !
 *       400:
 *         description: Missing required assignment information
 */

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.title || !body.subject || !body.dueDate) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const newAssignment = {
    id: assignmentList.length + 1,
    title: body.title,
    subject: body.subject,
    dueDate: body.dueDate
  };

  assignmentList.push(newAssignment);

  return NextResponse.json(
    {
      message: "Assignment added",
      data: newAssignment
    },
    { status: 201 }
  );
}
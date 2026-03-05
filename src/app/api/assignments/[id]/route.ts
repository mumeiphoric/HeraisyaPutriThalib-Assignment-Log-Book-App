import { NextResponse } from "next/server";

let assignmentList = [
  { id: 1, title: "Math homework", subject: "Math", dueDate: "2026-03-10" },
  { id: 2, title: "Physics report", subject: "Physics", dueDate: "2026-03-12" }
];

/**
 * @swagger
 * /api/assignments/{id}:
 *   get:
 *     summary: Get assignment details by ID :D
 *     description: Finds and returns a specific assignment based on its ID number.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the assignment you want to view
 *     responses:
 *       200:
 *         description: Assignment retrieved successfully!!
 *       404:
 *         description: Assignment not found, yikes ;-;
 */

// GET
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  const assignment = assignmentList.find((a) => a.id === id);

  if (!assignment) {
    return NextResponse.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    message: "Assignment retrieved successfully",
    data: assignment,
  });
}

/**
 * @swagger
 * /api/assignments/{id}:
 *   put:
 *     summary: Update an assignment !
 *     description: Updates an existing assignment's information using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the assignment to update
 *     responses:
 *       200:
 *         description: Assignment updated successfully!!
 *       404:
 *         description: Assignment not found, yikes ;-;
 */

// UPDATE
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);
  const body = await request.json();

  const index = assignmentList.findIndex((a) => a.id === id);

  if (index === -1) {
    return NextResponse.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  assignmentList[index] = {
    ...assignmentList[index],
    ...body,
  };

  return NextResponse.json({
    message: "Assignment updated",
    data: assignmentList[index],
  });
}

/**
 * @swagger
 * /api/assignments/{id}:
 *   delete:
 *     summary: Delete an assignment :0
 *     description: Removes an assignment from the log book if it is no longer needed.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the assignment to delete
 *     responses:
 *       200:
 *         description: Assignment deleted successfully!!
 *       404:
 *         description: Assignment not found, yikes ;-;
 */

// DELETE
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  const index = assignmentList.findIndex((a) => a.id === id);

  if (index === -1) {
    return NextResponse.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  const deleted = assignmentList.splice(index, 1);

  return NextResponse.json({
    message: "Assignment deleted",
    data: deleted[0],
  });
}
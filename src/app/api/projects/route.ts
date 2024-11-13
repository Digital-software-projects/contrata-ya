import { NextResponse } from "next/server";

//TODO: Delete this example route
export async function GET() {
  const projectNames = ["Proyecto Alpha", "Proyecto Beta", "Proyecto Gamma"];

  return NextResponse.json(projectNames, { status: 200 });
}

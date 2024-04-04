import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
export async function GET(req, res) {
  try {
    let headerList = headers();
      console.log(headerList);
    let id = parseInt(headerList.get("id"));
    console.log(id);
    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({ where: { id: id } });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

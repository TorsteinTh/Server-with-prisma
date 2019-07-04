import { prismaObjectType } from "nexus-prisma";

const todo = prismaObjectType({
    name: "todo",
    description: "todo",
    definition(t) {
        t.prismaFields(["*"]);
    },
});

export default todo

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

client.invoice
  .update({
    where: {
      id: "",
    },
    data: {
      items: {
        updateMany: {
          data: [
            {
              id: "",
              name: "Hello",
              price: 3440,
              quantity: 4,
            },
          ],
          where: {},
        },
      },
    },
  })
  .then((res) => {
    console.log({ res });
  })
  .catch((err) => {
    console.error({ err });
  });

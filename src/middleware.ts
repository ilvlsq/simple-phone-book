export { default } from "next-auth/middleware";

export const config = { matcher: ["/", "/phone-numbers", "/birthdays"] };

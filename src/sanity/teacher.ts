// export const teacher = {
//   name: "teacher",
//   type: "document",
//   title: "Teacher Profile",
//   fields: [
//     {
//       name: "name",
//       type: "string",
//       title: "Teacher Name",
//       validation: (rule: any) =>
//         rule.required().error("Ap Nam likhna Reh gya "),
//     },
//     {
//       name: "age",
//       type: "number",
//       title: "Teacher Age",
//       validation: (rule: any) =>
//         rule.required().min('15').max('100').warning("age 100 se ziada ho gai hai"),
//       hidden: ({ document }: any) => document.name === "Ayesha",
//       readonly: ({ document }: any) => document.name === "farhat",
//     },
//     {
//       name: "subject",
//       type: "reference",
//       title: "Select Subject",
//       to: [{ type: "subjects" }],
//       hidden: ({ document }: any) => document.age >= "25",
//     },
//     {
//       name: "student",
//       title: "Select Student",
//       type: "array",
//       of: [
//         {
//           type: "student",
//           to: [{ type: "student" }, { type: "subject" }],
//         },
//       ],
//     },
//   ],
// };

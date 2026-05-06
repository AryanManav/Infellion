const initialData = {
  id: "root",
  label: "Global Headquarters",
  level: 0,
  children: [
    {
      id: "division-1",
      label: "Engineering Division",
      level: 1,
      children: [
        {
          id: "dept-1",
          label: "Frontend Department",
          level: 2,
          children: [
            {
              id: "team-1",
              label: "React Team",
              level: 3,
              children: [
                {
                  id: "emp-1",
                  label: "Aryan",
                  level: 4,
                },
                {
                  id: "emp-2",
                  label: "Rohit",
                  level: 4,
                },
              ],
            },
            {
              id: "team-2",
              label: "UI Team",
              level: 3,
              children: [
                {
                  id: "emp-3",
                  label: "Neha",
                  level: 4,
                },
              ],
            },
          ],
        },
        {
          id: "dept-2",
          label: "Backend Department",
          level: 2,
          children: [
            {
              id: "team-3",
              label: "Node Team",
              level: 3,
              children: [
                {
                  id: "emp-4",
                  label: "Ankit",
                  level: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "division-2",
      label: "Marketing Division",
      level: 1,
      children: [
        {
          id: "dept-3",
          label: "SEO Department",
          level: 2,
          children: [
            {
              id: "team-4",
              label: "Content Team",
              level: 3,
              children: [
                {
                  id: "emp-5",
                  label: "Priya",
                  level: 4,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default initialData;
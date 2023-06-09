import { useEffect, useState } from "react";
import { createStyles, Table, ScrollArea } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  data: {
    sno: number;
    bankname: string;
    accno: number;
    acctype: string;
    ifsc: string;
    branch: string;
  }[];
}

export function TableScrollAreaBank() {
  const [tableData, setTableData] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const temp = [];
  useEffect(() => {
    if (user) {
      getDoc(doc(db, "user_details", user.uid)).then((res) => {
        res.data().bank_details.map((elem) => {
          temp.push({
            bankname: elem.bankname,
            accno: elem.accno,
            acctype: elem.acctype,
            ifsc: elem.ifsc,
            branch: elem.branch,
          });
          setTableData(temp)
        });
      });
    }
  }, [user]);
  const rows = tableData.map((row,index) => (
    <tr key={row.index}>
      <td>{row.bankname}</td>
      <td>{row.accno}</td>
      <td>{row.acctype}</td>
      <td>{row.ifsc}</td>
      <td>{row.branch}</td>
    </tr>
    
  ));

  return (
    <ScrollArea
      sx={{ height: 300 }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Bank Name</th>
            <th>Account No</th>
            <th>Account Type</th>
            <th>IFSC Code</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

import { useEffect, useState } from "react";
import { createStyles, Table, ScrollArea, Center } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";
import { isAdmin } from "../../../firebase/functions";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

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

export function TableScrollAreaTransactionAdmin() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [tableData, setTableData] = useState([]);

  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    if (isAdmin(user)) {
      getDocs(query(collection(db, 'transaction_hist'), orderBy('date', 'desc')))
        .then((dta) => {
          
          dta.docs.map((doc) => {
              temp.push({
                userid: doc.data().userid,
                date: doc.data().date,
                amount: doc.data().amount,
                type:doc.data().type,
              });
            })
            setTableData(temp);
            console.log(tableData[0]?.date);

          })
        .then(() => {});
    }
  }, [user]);

  const temp = [];
  

  const rows = tableData.map((element) => (
    <tr key={element.to}>
      <td><Center>{element.userid}</Center></td>
      <td><Center>{new Date(element.date.seconds*1000).toLocaleDateString()}</Center></td>
      <td><Center>{element.amount}</Center></td>
      <td><Center>{element.type}</Center></td>
    </tr>
  ));
  console.log(tableData);
  
  return (
    <ScrollArea
      sx={{ height: 300 }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th><Center>User</Center></th>
            <th ><Center>Date</Center></th>
            <th><Center>Amount</Center></th>
            <th><Center>Type</Center></th>
          </tr>
        </thead>
        <tbody>
          
          {rows}
        </tbody>
      </Table>
    </ScrollArea>
  );
}

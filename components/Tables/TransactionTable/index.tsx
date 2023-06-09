import { useEffect, useState } from "react";
import { createStyles, Table, ScrollArea, Center } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
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

export function TableScrollAreaTransaction() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [tableData, setTableData] = useState([]);

  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<DocumentData>();

  useEffect(() => {
    if (user) {
      getDoc(doc(db, "user_details", user.uid))
        .then((res) => {
          const q = query(
            collection(db, "transaction_hist"),
            where("userid", "==", res.data().userid)
          );
          getDocs(q).then((dta) => {
            setData(dta);

            dta.docs.map((doc) => {
              temp.push({
                date: doc.data().date,
                amount: doc.data().amount,
                description: doc.data().description,
                type:doc.data().type
              });
            });
            setTableData(temp);
            console.log(tableData[0]?.date);

          });
        })
        .then(() => {});
    }
  }, [user]);

  const temp = [];
  

  const rows = tableData.map((element) => (
    <tr key={element.to}>
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

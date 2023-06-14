import {
    AppShell,
    Button,
    Center,
    Input,
    NumberInput,
    Paper,
    Space,
    TextInput,
    Title,
  } from "@mantine/core";
  import { DatePicker } from "@mantine/dates";
  import { useForm } from "@mantine/form";
  import {
    TickerSymbol,
    TickerTape,
    TickerTapeSymbol,
    MiniChart
  } from "react-ts-tradingview-widgets";
  import {
    addDoc,
    collection,
    doc,
    DocumentData,
    getDoc,
  } from "firebase/firestore";
  import Head from "next/head";
  import { useEffect, useState } from "react";
  import { useAuthState } from "react-firebase-hooks/auth";
  import HeaderMegaMenu from "../../components/Header";
  import { NavbarSimple } from "../../components/Sidebar";
  import { TableScrollAreaTransaction } from "../../components/Tables/TransactionTable";
  import { auth, db } from "../../firebase";
  import { getData } from "../../firebase/functions";
  import styles from "../../styles/user/dashboard.module.scss";
  import Cash from "./cash";
  import Router from "next/router";
import { IconListSearch } from "@tabler/icons";
  
  export default function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [data, setData] = useState<DocumentData>();
    const [symbol,setSymbol] = useState('BSE:SBIN');

    const setNewSymbol=()=>{
        setSymbol(newSymbol)
    }
  
    useEffect(() => {
      if (!user) {
        return () => {
          Router.push('/auth/login')
        }
      }
    })

    var newSymbol="BSE:SBIN";
  
    const symbols: TickerSymbol[] = [
      {
          title: "",
          proName: "NASDAQ:AMZN",
      },
      {
          title: "",
          proName: "NASDAQ:NFLX",
      },
      {
          title: "",
          proName: "BSE:FEDERALBNK",
      },
      {
          title: "",
          proName: "BSE:BANKBARODA",
      },
      {
          title: "",
          proName: "BSE:NIFTYBEES",
      },
      {
          title: "",
          proName: "BSE:SBIN",
      },
      {
          title: "",
          proName: "BSE:GUJGAS",
      },
  ];
    return (
      <><Head>
        <title>Bank</title>
      </Head>
        <div className="userpage">
          <AppShell
            padding="md"
            navbar={<NavbarSimple />}
            
          >
            <TickerTape symbols={symbols} colorTheme="dark"></TickerTape>
            <MiniChart symbol={symbol} width='100%'></MiniChart>
            <TextInput
                label="Symbol"
                onChange={(e)=>newSymbol=e.target.value}
                placeholder="Enter Symbol to Watch"
                icon={<IconListSearch size={14} />}
                required
                labelProps={{ sx: {color:'black'} }}
                style={{width:'100%'}}
              />
              <p style={{fontSize:9}}>Example: NASDAQ:AMZN,BSE:GUJGAS,BSE:BANKBARODA</p>
              <Button style={{ backgroundColor: "#0d1b29",width:'100%'}} fullWidth mt="xl" type="submit" onClick={()=>setNewSymbol()}>Search</Button>
        </AppShell>
        </div>
      </>
    );
  }
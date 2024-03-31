interface Transaction {
  counterpartyName: string;
  code: string;
  transactionUuid: string;
  amount: number;
  date: string;
}

interface MonthBookDetailType {
  transactionDtoList: Transaction[];
  monthIncome: number;
  monthOutcome: number;
}

interface DayDetail {
  date: string;
  incomeDay: string;
  outcomeDay: string;
}

interface TransactionType {
  amount: number;
  code: string;
  counterpartyName: string;
  date: string;
  memo: string | null;
  receipts: any;
  transactionUuid: string;
}

interface ReceptDetail {
  item: string;
  cnt: number;
  price: number;
  total: number;
}

interface OneTransactionType {
  storeName: string;
  transactionUUID: string;
  type: string;
  amount: number;
  receptDetails: ReceptDetail[];
  memo: string;
}

import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TransactionList from "@/components/transaction-list"
import TransactionForm from "@/components/transaction-form"
// import TransactionForm from "@/components/transaction-form"
// import ExpensesChart from "@/components/expenses-chart"
// import DashboardSummary from "@/components/dashboard-summary"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <main className="container mx-auto py-6 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Personal Finance Visualizer</h1>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-6">
          <TransactionForm />
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <TransactionList />
          </Suspense>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            {/* <ExpensesChart /> */}
          </Suspense>
        </TabsContent>

        <TabsContent value="dashboard" className="space-y-6">
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            {/* <DashboardSummary /> */}
          </Suspense>
        </TabsContent>
      </Tabs>
    </main>
  )
}

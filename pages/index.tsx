import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const client = new ApolloClient({
  uri: "http://localhost:8080/",
  cache: new InMemoryCache(),
});
export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className="hoge">Next.js</div>
    </ApolloProvider>
  );
}

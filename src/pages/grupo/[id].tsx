import { useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/molecules/header";
import Sidebar from "@/components/organisms/Sidebar";
import SidebarSearch from "@/components/organisms/sidebarSearch";
import GroupDetailsSection from "@/components/organisms/groupDetailsSection";
import GroupSearchSection from "@/components/organisms/groupSearchSection";
import NoResultsSection from "@/components/organisms/NoResultsSection";

export default function Grupo() {
  const router = useRouter();
  const { id } = router.query;

  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasResults, setHasResults] = useState(true); // Simulado

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setHasSearched(true);

    // Simulación de resultados
    if (term.toLowerCase().includes("arte") || term.trim() === "") {
      setHasResults(true);
    } else {
      setHasResults(false);
    }
  };

  return (
    <div className="bg-white">
      <Header />
      <div className="flex gap-2">
        <div className="w-[30%]">
          {!hasSearched ? (
            <Sidebar onSearch={handleSearch} />
          ) : (
            <SidebarSearch onSearch={handleSearch} />
          )}
        </div>

        <div className="p-8 w-[70%] max-h-213 overflow-auto">
          {!hasSearched ? (
            <GroupDetailsSection groupId={id as string} />
          ) : hasResults ? (
            <GroupSearchSection searchTerm={searchTerm} />
          ) : (
            <NoResultsSection term={searchTerm} />
          )}
        </div>
      </div>
    </div>
  );
}


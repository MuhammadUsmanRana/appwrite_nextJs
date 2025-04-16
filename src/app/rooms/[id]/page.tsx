import { use } from "react";
import { Metadata } from "next";
import DetailsMain from "@/components/templetes/pageSection/DetailsMain";

export const metadata: Metadata = {
    title: "Rooms Detail",
    description: "Generated by Usman Developer",
};

const Page = ({ params }: { params: Promise<{ id?: string | null | undefined }> }) => {
    const { id } = use(params);
    return <DetailsMain id={id ?? ""} />;
};

export default Page;

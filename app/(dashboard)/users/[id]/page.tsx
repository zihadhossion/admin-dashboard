import Profile from "@/components/Profile";

export default async function SingleUserPage({ params }: { params: { id: number } }) {
    const { id } = await params;

    return (
        <>
            <Profile id={id} />
        </>
    );
};
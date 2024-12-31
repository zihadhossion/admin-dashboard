import Profile from "@/components/Profile";

export default async function SingleUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <>
            <Profile id={id} />
        </>
    );
};
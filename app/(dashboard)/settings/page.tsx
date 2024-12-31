import { auth } from "@/auth";
import Profile from "@/components/Profile";

export default async function SettingPage() {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) return;

    return (
        <>
            <Profile id={userId} />
        </>
    )
};

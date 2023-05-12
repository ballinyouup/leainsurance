import { clerkClient } from "@clerk/nextjs";

export const clerkActions = {
	updateRole: async (userId: string, role: string) => {
		const updatedUser = await clerkClient.users.updateUser(userId, {
			publicMetadata: { role: role },
		});
		return updatedUser;
	},
	getUserList: async () => {
		const userList = await clerkClient.users.getUserList();
		return userList;
	},
};

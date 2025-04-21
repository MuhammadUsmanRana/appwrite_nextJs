import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { createPostProps, updatePostProps } from "../../types/typs";
import { Document } from "../../types/typs"; // Ensure this import matches your actual type definition
import { AppwriteService } from "../config/appwrite";


const AppWriteServices = new AppwriteService();
export const createRoom = createAsyncThunk(
    "rooms/createRoom",
    async (data: createPostProps, { rejectWithValue }) => {
        try {
            const response = await AppWriteServices.createRoom(data);
            console.log("🚀 ~ response:", response)
            if (!response) {
                return rejectWithValue("Error creating room");
            }
            return response;
        } catch (error: any) {
            console.error(error.response.data.message);
        }
    }
);

export const getRooms = createAsyncThunk(
    "rooms/getRooms",
    async (_, { rejectWithValue }) => {
        try {
            const response = await AppWriteServices.getRooms();
            if (!response?.documents) {
                return rejectWithValue("Error fetching rooms");
            }
            return response?.documents as Document[];
        } catch (error: any) {
            console.error(error.response.data.message);
        }
    }
);

export const getRoomById = createAsyncThunk(
    "rooms/getRoomById",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await AppWriteServices.getRoomById(id);
            if (!response) {
                return rejectWithValue("Error fetching room by ID");
            }
            return response as Document;
        } catch (error: any) {
            console.error(error.response.data.message);
        }
    }
);

export const updateRoom = createAsyncThunk(
    "rooms/updateRoom",
    async ({ roomId, data }: { roomId: string; data: updatePostProps }) => {
        try {
            const response = await AppWriteServices.updateRoom(roomId, data);
            return response;
        } catch (error: any) {
            console.error(error.response.data.message);
        }
    }
);

export const deleteRoom = createAsyncThunk(
    "rooms/deleteRoom",
    async (roomId: string) => {
        try {
            const response = await AppWriteServices.deleteRoom(roomId);
            return response;
        } catch (error: any) {
            console.error(error.response.data.message);
        }
    }
);


const initialState: {
    rooms: Document[];
    loading: boolean;
    error: string | null;
    selectedRoom: Document | null;
} = {
    rooms: [],
    loading: false,
    error: null,
    selectedRoom: null,
};

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(createRoom.pending, (state) => {
                state.loading = true;
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.loading = false;
                const payload = action.payload;
                // &&
                //     payload.name &&
                //     payload.description &&
                //     payload.sqft &&
                //     payload.capacity &&
                //     payload.location &&
                //     payload.address &&
                //     payload.amenities &&
                //     payload.availability &&
                //     payload.price_per_hour &&
                //     payload.image
                if (payload) {
                    state.rooms.push(payload as Document);
                }
            })
            .addCase(createRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getRooms.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRooms.fulfilled, (state, action) => {
                state.loading = false;
                state.rooms = action.payload || [];
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getRoomById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRoomById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRoom = action.payload as WritableDraft<Document> | null;
            })
            .addCase(getRoomById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(updateRoom.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateRoom.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    if (action.payload) {
                        const index = state.rooms.findIndex((room) => room.$id === action.payload?.$id);
                        if (index !== -1) {
                            Object.assign(state.rooms[index], action.payload);
                        }
                    }
                }
            })
            .addCase(updateRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

        builder.addCase(deleteRoom.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.rooms = state.rooms.filter((room) => room.$id !== action.payload);
        });
        builder.addCase(deleteRoom.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default roomsSlice.reducer;

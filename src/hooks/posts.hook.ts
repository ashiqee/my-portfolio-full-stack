import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  createAComment,
  createAPost,
  getAllPosts,
  updateAPost,
} from "@/services/PostService";

export const useCreatePosts = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["posts"],
    mutationFn: async (postData) => await createAPost(postData),
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["posts"],
    mutationFn: async (postData) => await updateAPost(postData),
    onSuccess: (res) => {
      toast.success(res.message);
      router.push("/admin/projects");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetAllPost = () => {
  return useMutation({
    mutationKey: ["posts"],
    mutationFn: async (query: Record<string, any>) => {
      return await getAllPosts(query);
    },
  });
};

// comment hook

export const useCreateComment = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["posts"],
    mutationFn: async (commentData) => await createAComment(commentData),
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

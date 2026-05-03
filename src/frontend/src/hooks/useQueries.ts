import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  ContactSubmission,
  ContentBlock,
  JobListing,
  ProductListing,
} from "../backend";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";
export type { JobListing, ProductListing, ContentBlock, ContactSubmission };

// ── Job Type constants (backend uses plain strings) ──────────────────────
export const JobTypeValues = {
  fullTime: "fullTime",
  partTime: "partTime",
  contract: "contract",
} as const;
export type JobTypeValue = (typeof JobTypeValues)[keyof typeof JobTypeValues];

// ── Queries ─────────────────────────────────────────────────────────────

export function useActiveJobListings() {
  const { actor, isFetching } = useActor();
  return useQuery<JobListing[]>({
    queryKey: ["activeJobListings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getActiveJobListings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllJobListings() {
  const { actor, isFetching } = useActor();
  return useQuery<JobListing[]>({
    queryKey: ["allJobListings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllJobListings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useActiveProductListings() {
  const { actor, isFetching } = useActor();
  return useQuery<ProductListing[]>({
    queryKey: ["activeProductListings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getActiveProductListings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllProductListings() {
  const { actor, isFetching } = useActor();
  return useQuery<ProductListing[]>({
    queryKey: ["allProductListings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProductListings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllContentBlocks() {
  const { actor, isFetching } = useActor();
  return useQuery<ContentBlock[]>({
    queryKey: ["allContentBlocks"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContentBlocks();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useContentBlock(key: string) {
  const { actor, isFetching } = useActor();
  return useQuery<ContentBlock | null>({
    queryKey: ["contentBlock", key],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getContentBlock(key);
    },
    enabled: !!actor && !isFetching && !!key,
  });
}

export function useContactSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

/** Any signed-in (non-anonymous) Internet Identity user is treated as admin */
export function useIsCallerAdmin() {
  const { identity } = useInternetIdentity();
  return useQuery<boolean>({
    queryKey: ["isCallerAdmin", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!identity) return false;
      return !identity.getPrincipal().isAnonymous();
    },
    enabled: true,
  });
}

// ── Mutations ────────────────────────────────────────────────────────────

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      subject,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(name, email, phone, subject, message);
    },
  });
}

export function useUpdateContentBlock() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      key,
      title,
      content,
    }: {
      key: string;
      title: string;
      content: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateContentBlock(key, title, content);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["allContentBlocks"] }),
  });
}

export function useSeedDefaultContent() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      return actor.seedDefaultContent();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["allContentBlocks"] }),
  });
}

export function useCreateJobListing() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      title: string;
      department: string;
      location: string;
      jobType: string;
      description: string;
      requirements: string[];
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.createJobListing(
        data.title,
        data.department,
        data.location,
        data.jobType,
        data.description,
        data.requirements,
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allJobListings"] });
      qc.invalidateQueries({ queryKey: ["activeJobListings"] });
    },
  });
}

export function useUpdateJobListing() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      id: bigint;
      title: string;
      department: string;
      location: string;
      jobType: string;
      description: string;
      requirements: string[];
      isActive: boolean;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateJobListing(
        data.id,
        data.title,
        data.department,
        data.location,
        data.jobType,
        data.description,
        data.requirements,
        data.isActive,
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allJobListings"] });
      qc.invalidateQueries({ queryKey: ["activeJobListings"] });
    },
  });
}

export function useDeleteJobListing() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteJobListing(id);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allJobListings"] });
      qc.invalidateQueries({ queryKey: ["activeJobListings"] });
    },
  });
}

export function useCreateProductListing() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      description: string;
      features: string[];
      price: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.createProductListing(
        data.name,
        data.description,
        data.features,
        data.price,
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allProductListings"] });
      qc.invalidateQueries({ queryKey: ["activeProductListings"] });
    },
  });
}

export function useUpdateProductListing() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      id: bigint;
      name: string;
      description: string;
      features: string[];
      price: string;
      isActive: boolean;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateProductListing(
        data.id,
        data.name,
        data.description,
        data.features,
        data.price,
        data.isActive,
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allProductListings"] });
      qc.invalidateQueries({ queryKey: ["activeProductListings"] });
    },
  });
}

export function useDeleteProductListing() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteProductListing(id);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allProductListings"] });
      qc.invalidateQueries({ queryKey: ["activeProductListings"] });
    },
  });
}

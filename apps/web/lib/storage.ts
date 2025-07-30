import { supabase } from './supabase'

export const storageHelpers = {
  // Upload file to storage
  uploadFile: async (bucket: string, path: string, file: File) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false
      })
    return { data, error }
  },

  // Download file from storage
  downloadFile: async (bucket: string, path: string) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .download(path)
    return { data, error }
  },

  // Get public URL for file
  getPublicUrl: (bucket: string, path: string) => {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path)
    return data.publicUrl
  },

  // Delete file from storage
  deleteFile: async (bucket: string, path: string) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .remove([path])
    return { data, error }
  },

  // List files in bucket
  listFiles: async (bucket: string, path?: string) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(path, {
        limit: 100,
        offset: 0,
      })
    return { data, error }
  },
}
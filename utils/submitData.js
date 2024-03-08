import supabase from "@/app/api/supabase";

export const submitTitle = async (
  data,
  currentUserId,
  currentEditData,
  toast,
) => {
  const { error } = await supabase
    .from("microsites")
    .update({
      title: data,
      supabase_auth_id: currentUserId,
    })
    .eq("id", currentEditData?.id);
  if (error) {
    toast({
      variant: "destructive",
      title: "Ups ada yang salah :(",
      description: error.message,
    });
  } else {
    toast({
      description: "Berhasil update data ✅",
    });
  }
};

export const submitDescription = async (
  data,
  currentUserId,
  currentEditData,
  toast,
) => {
  const { error } = await supabase
    .from("microsites")
    .update({
      description: data,
      supabase_auth_id: currentUserId,
    })
    .eq("id", currentEditData?.id);
  if (error) {
    toast({
      variant: "destructive",
      title: "Ups ada yang salah :(",
      description: error.message,
    });
  } else {
    toast({
      description: "Berhasil update data ✅",
    });
  }
};

export const submitLink = async (
  currentUserId,
  currentEditData,
  currentLinks,
  toast,
) => {
  const { error } = await supabase
    .from("microsites")
    .update({
      links: currentLinks,
      supabase_auth_id: currentUserId,
    })
    .eq("id", currentEditData?.id);
  if (error) {
    toast({
      variant: "destructive",
      title: "Ups ada yang salah :(",
      description: error.message,
    });
  } else {
    toast({
      description: "Berhasil update data ✅",
    });
  }
};

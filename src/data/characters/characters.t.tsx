interface Character {
  id: string;
  userId: string;
  imageUrl: string;
  coverName: string;
  description: string;
  createdAt: Date;
  deletedAt: Date | null;
}

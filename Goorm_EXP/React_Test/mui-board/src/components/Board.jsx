import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Container,
} from "@mui/material";

export default function Board() {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([
    { id: 1, title: "MUI 사용하기", author: "양진혁", date: "2026-02-24" },
  ]);

  const handleAddPost = () => {
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        title: "새 글",
        author: "사용자",
        date: new Date().toISOString().slice(0, 10),
      },
    ]);
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        📋 게시판
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        글쓰기
      </Button>

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>날짜</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{post.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>글 작성</DialogTitle>
        <DialogContent>
          <TextField label="제목" fullWidth margin="dense" />
          <TextField label="작성자" fullWidth margin="dense" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>취소</Button>
          <Button variant="contained" onClick={handleAddPost}>
            등록
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

import { Box, Button, List, ListItem, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const GameSidebar: React.FC<{
    moves: string[];
    chatMessages: string[];
    onSendMessage: (message: string) => void;
  }> = ({ moves, chatMessages, onSendMessage }) => {
    const [message, setMessage] = useState('');
  
    const handleSendMessage = () => {
      if (message.trim()) {
        onSendMessage(message.trim());
        setMessage('');
      }
    };
  
    return (
      <Box>
        {/* Historial de movimientos */}
        <Box mb={2}>
          <Typography variant="h5" gutterBottom>
            Historial de movimientos
          </Typography>
          <Paper style={{ maxHeight: 200, overflow: 'auto' }}>
            <List>
              {moves.map((move, index) => (
                <ListItem key={index}>{`${index + 1}. ${move}`}</ListItem>
              ))}
            </List>
          </Paper>
        </Box>
  
        {/* Chat */}
        <Box mb={2}>
          <Typography variant="h5" gutterBottom>
            Chat
          </Typography>
          <Paper style={{ maxHeight: 200, overflow: 'auto', marginBottom: 10, padding: 10 }}>
            {chatMessages.map((msg, index) => (
              <Typography key={index} variant="body2">
                {msg}
              </Typography>
            ))}
          </Paper>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Escribe un mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSendMessage} style={{ marginTop: 10 }}>
            Enviar
          </Button>
        </Box>
  
        {/* Botones */}
        <Box>
          <Button variant="contained" color="secondary" style={{ marginRight: 10 }}>
            Rendirse
          </Button>
          <Button variant="contained">
            Ofrecer Tablas
          </Button>
        </Box>
      </Box>
    );
  };
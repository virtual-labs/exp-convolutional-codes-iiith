# Theory
The theory associated with Experiment-5 is divided into two parts:

(1) Encoding of convolutional codes <br />
(2) Viterbi decoding 

## 1  Encoding of convolutional codes
In experiment 1, we studied block codes and linear block codes. Convolutional codes are linear codes, but they are not "block" codes. For a block code, the given long stream of input bits is first divided into short message blocks and then a codeword is assigned to each message block. In convolutional codes, the input bitstream is directly given to the encoder, without dividing it into short message blocks. The output of convolutional encoder is the  encoded bitstream corresponding to the input bitstream. Another main difference between block codes and convolutional codes is that the convolutional encoder has a "memory". For a convolutional code, the encoded output bit at any given time depends not only on the current input bits but also on previous input bits, hence the encoder is said to have a memory. <br />     

We shall now recall some basics about convolutional encoder. We shall focus on non-systematic feedforeward encoders of rate $1/n$. Please refer [1], [2] for a detailed discussion about convolutional codes. We shall introduce the basics of convolutional encoder through an example. Throughout this section, we shall focus on the rate $1/2$ convolutional encoder illustrated in Figure~1. As shown, this encoder consists of the system formed by two shift register, two adders, and the corresponding connections. The memory $m$ of this encoder is equal to the number of shift registers.  
For Figure 1, we have $m=2$. The input bitstream is denoted by $\mathbf{u} = [u_0, u_1, u_2, \ldots]$ such that at time instant $t$, the bit $u_t$ enters the system. The contents of the shift registers at time $t$ are $u_{t-1}$ and $u_{t-2}$ respectively. For the sake of simplicity we shall assume that at time $t=0$, the contents of both the shift registers are empty, i.e., bit $0$ is stored at both the registers.The output of the encoder consists of two bitstreams denoted by $\mathbf{v}^{(0)} = [v_0^{(0)}, v_1^{(0)}, v_2^{(0)}, ...]$ and $\mathbf{v}^{(1)} = [v_0^{(1)}, v_1^{(1)}, v_2^{(1)},...]$ such that the final encoded bitstream is given by
$\mathbf{v}$ $=$ $[v_0^{(0)}, v_0^{(1)}, v_1^{(0)}, v_1^{(1)}, v_2^{(0)}, v_2^{(1)}, ...]$

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RouterLink } from 'src/routes/components';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { ColorPicker } from 'src/components/color-utils';
import { Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { _description } from 'src/_mock';

// ----------------------------------------------------------------------


export type FiltersProps = {
  price: string;
  rating: string;
  gender: string[];
  colors: string[];
  category: string;
};

type ProductFiltersProps = {
  canReset: boolean;
  openFilter: boolean;
  filters: FiltersProps;
  onOpenFilter: () => void;
  onCloseFilter: () => void;
  onResetFilter: () => void;
  onSetFilters: (updateState: Partial<FiltersProps>) => void;
};

export function AddProduct({
  filters,
  canReset,
  openFilter,
  onSetFilters,
  onOpenFilter,
  onCloseFilter,
  onResetFilter,
}: ProductFiltersProps) {

  const [addProdState, setAddProdState] = useState({
    name: "",
    description: "",
    size: '',
    weight: '',
    totalUnitsSold: 0,
    viewCount: 0,
    stock: 0,
    quantityPerPack: '',
    capacity: '',
    category: '',
    color: '',
    colorOption: [],
    availableSizes: [],
    imageUrl: '',
    imagePublicId: '',
  } as any)

  const handleOnChange = (event: any) => {
    const { value, name } = event.target
    setAddProdState({ ...addProdState, [name]: value })
  }

  const categories = ['Electronics', 'Clothing', 'Home', 'Books']; // Example categories
  const allColors = ['Red', 'Green', 'Blue', 'Black', 'White'];
  const allSizes = ['S', 'M', 'L', 'XL', 'XXL'];


  return (
    <>
      <Box
        component={RouterLink}
        href="#"
        onClick={onOpenFilter}
        sx={[
          (theme) => ({
            right: 0,
            top: 112,
            zIndex: 999,
            display: 'flex',
            cursor: 'pointer',
            position: 'fixed',
            color: 'text.primary',
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            bgcolor: 'background.paper',
            padding: theme.spacing(1, 3, 1, 2),
            boxShadow: theme.vars.customShadows.dropdown,
            transition: theme.transitions.create(['opacity']),
            '&:hover': { opacity: 0.72 },
          })
        ]}
      >
        <Badge color="error" max={99}>
          <Iconify icon="solar:add-circle-bold" width={28} />
        </Badge>
      </Box>


      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        slotProps={{
          paper: {
            sx: { width: 400, overflow: 'hidden' },
          },
        }}
      >
        <Box
          sx={{
            py: 2,
            pl: 2.5,
            pr: 1.5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Add Product
          </Typography>



          <IconButton onClick={onCloseFilter}>
            <Iconify icon="mingcute:close-line" />
          </IconButton>
        </Box>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <TextField
              fullWidth
              name="name"
              label="Product Name"
              value={addProdState?.name}
              onChange={handleOnChange}
              sx={{ my: 3 }}
              autoComplete={"on"}
              slotProps={{
                inputLabel: { shrink: true },
              }}
            />

            <TextField
              fullWidth
              name="description"
              label="Description"
              value={addProdState?.description}
              onChange={handleOnChange}
              sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }}
            />

            <TextField
              fullWidth
              name="price"
              label="Price"
              value={addProdState?.name}
              onChange={handleOnChange}
              sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }}
            />

            <TextField
              fullWidth
              name="name"
              label="Product Name"
              value={addProdState?.description}
              onChange={handleOnChange}
              sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }}
            />

            <TextField label="Size" name="size" value={addProdState.size} onChange={handleOnChange} sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }} />
            <TextField label="Weight" name="weight" value={addProdState.weight} onChange={handleOnChange} sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }} />
            <TextField label="Total Units Sold" name="totalUnitsSold" type="number" value={addProdState.totalUnitsSold} onChange={handleOnChange} sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }} />
            <TextField label="View Count" name="viewCount" type="number" value={addProdState.viewCount} onChange={handleOnChange} sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }} />
            <TextField label="Stock" name="stock" type="number" value={addProdState.stock} onChange={handleOnChange} sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }} />
            <TextField label="Quantity Per Pack" name="quantityPerPack" value={addProdState.quantityPerPack} onChange={handleOnChange} sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }} />
            <TextField label="Capacity" name="capacity" value={addProdState.capacity} onChange={handleOnChange} sx={{ my: 3 }}
              slotProps={{
                inputLabel: { shrink: true },
              }} />


            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={addProdState.category}
                onChange={handleOnChange}
                input={<OutlinedInput label="Category" />}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Color</InputLabel>
              <Select
                name="color"
                value={addProdState.color}
                onChange={handleOnChange}
                input={<OutlinedInput label="Color" />}
              >
                {allColors.map((color) => (
                  <MenuItem key={color} value={color}>{color}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Color Options</InputLabel>
              <Select
                multiple
                name='colorOption'
                value={addProdState.colorOption}
                onChange={handleOnChange}
                input={<OutlinedInput label="Color Options" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {allColors.map((color) => (
                  <MenuItem key={color} value={color}>{color}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Available Sizes</InputLabel>
              <Select
                multiple
                name='availableSizes'
                value={addProdState.availableSizes}
                onChange={handleOnChange}
                input={<OutlinedInput label="Available Sizes" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {allSizes.map((size) => (
                  <MenuItem key={size} value={size}>{size}</MenuItem>
                ))}
              </Select>
            </FormControl>

            
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

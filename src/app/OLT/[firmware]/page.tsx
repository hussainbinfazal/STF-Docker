
// Content OLT Firmware Page Component
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

interface FirmwareData {
  id: string;
  version: string;
  releaseDate: string;
  description: string;
  status: string;
}

const ContentOltFirmware: React.FC = () => {
  const [firmwareData, setFirmwareData] = useState<FirmwareData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<string | null>(null);

  // Fetch firmware data
  const fetchFirmwareData = async () => {
    try {
      const response = await axios.get('/api/olt-firmware');
      setFirmwareData(response.data);
    } catch (error) {
      message.error('Failed to fetch firmware data');
    }
  };

  useEffect(() => {
    fetchFirmwareData();
  }, []);

  // Table columns configuration
  const columns = [
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Release Date',
      dataIndex: 'releaseDate',
      key: 'releaseDate',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: FirmwareData) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            type="link"
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            type="link"
            danger
          />
        </>
      ),
    },
  ];

  // Handle edit firmware
  const handleEdit = (record: FirmwareData) => {
    setEditingId(record.id);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  // Handle delete firmware
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/olt-firmware/${id}`);
      message.success('Firmware deleted successfully');
      fetchFirmwareData();
    } catch (error) {
      message.error('Failed to delete firmware');
    }
  };

  // Handle form submission
  const handleSubmit = async (values: any) => {
    try {
      if (editingId) {
        await axios.put(`/api/olt-firmware/${editingId}`, values);
        message.success('Firmware updated successfully');
      } else {
        await axios.post('/api/olt-firmware', values);
        message.success('Firmware added successfully');
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingId(null);
      fetchFirmwareData();
    } catch (error) {
      message.error('Failed to save firmware');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={() => {
            setEditingId(null);
            form.resetFields();
            setIsModalVisible(true);
          }}
        >
          Add New Firmware
        </Button>
      </div>

      <Table columns={columns} dataSource={firmwareData} rowKey="id" />

      <Modal
        title={editingId ? 'Edit Firmware' : 'Add New Firmware'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
          setEditingId(null);
        }}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="version"
            label="Version"
            rules={[{ required: true, message: 'Please input version!' }]}
          >
            <input />
          </Form.Item>
          <Form.Item
            name="releaseDate"
            label="Release Date"
            rules={[{ required: true, message: 'Please input release date!' }]}
          >
            <input type="date" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input description!' }]}
          >
            <input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select status!' }]}
          >
            <select>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ContentOltFirmware;